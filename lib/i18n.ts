import { es } from '@/locales/es';

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

type TranslationKey = NestedKeyOf<typeof es>;

/**
 * Función para obtener textos traducidos
 * @param key - Ruta del texto en formato "objeto.propiedad.subpropiedad"
 * @returns El texto traducido
 */
export function t(key: TranslationKey): string {
  const keys = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = es;

  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }

  return typeof result === 'string' ? result : key;
}

/**
 * Función para obtener textos traducidos con interpolación de variables
 * @param key - Ruta del texto
 * @param params - Objeto con variables a reemplazar
 * @returns El texto traducido con variables reemplazadas
 */
export function tt(key: TranslationKey, params: Record<string, string | number>): string {
  let text = t(key);

  Object.keys(params).forEach((param) => {
    text = text.replace(`{{${param}}}`, String(params[param]));
  });

  return text;
}

// Exportar las traducciones para uso directo si es necesario
export { es as translations };

