# GifsApp

Aplicación web para buscar y mostrar GIFs utilizando la API de Klipy.

## 🚀 Tecnologías utilizadas

- Angular
- TypeScript
- HTML / CSS
- API REST (Klipy)

## 1. Configuración de la API

Para usar la aplicación, necesitas una **API Key de Klipy**:

1. Ve a [Klipy](https://www.klipy.com) y crea una cuenta.
2. En tu perfil, genera una nueva API Key.
3. Copia la API Key.

## 2. Configura tu environment

En `src/environments/environment.development.ts` coloca tu API Key:

  klipyApiKey: 'TU_API_KEY_AQUI',
  klipyUrl: 'https://api.klipy.com/api/v1/TU_API_KEY_AQUI/gifs/search?'

## 3. Instalar dependencias

cd GifsApp
npm install

## 4. Ejecutar la aplicación

ng serve

## 5. Abrir en el navegador

http://localhost:4200

📚 Mejoras futuras

- Paginación de resultados
- Filtrado por categorías o etiquetas
- Mejoras en la UI y UX

📫 Contacto

- GitHub: JABALOC
- Email: jabalo1988@gmail.com
