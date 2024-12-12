# Configuración de servicio de envío de correos

Este es el servidor backend para el formulario de contacto del portfolio. Maneja el envío de emails usando Resend.

## Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn
- Una cuenta en [Resend](https://resend.com) para obtener la API key
- Crear un archivo .env en la raiz del proyecto con las siguientes variables:

```
API_KEY_RESEND= "tu_api_key_resend"
FROM_EMAIL= "tu_email_de_origen"
TO_EMAIL= "tu_email_de_destino"
```

## Configuración

1. Clona el repositorio:

```
git clone https://github.com/usuario/server.git
cd file-server
```

2. Instala las dependencias:

```
npm install
```

3. Inicia el servidor:

```
npm run dev
```

4. Accede a la aplicación en:

```
http://localhost:3000
```






