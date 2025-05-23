App de tareas

debes instalar las dependencias

npm install

Agregar la variable de entorno con la siguiente url

    ENV_API_SERVER=http://localhost:3001/tareas

y luego ejecutar el siguiente comando

    npm run dev

para ver el proyecto completo visita el siguiente link:

tiene los siguientes componentes:

client

- RadioButtonStatus
- SelectUserAssigned
- TareaList
- TareaForm (Formulario para crear tareas)
- ProviderRedux

server

- TareaCard

Paginas:

- Home

Rutas:

- /
- /tareas/add
- /tareas/edit/:id

schemas:

- index.ts

Redux:

- store
- tasksSlice

utils:

- arrayStateTareas
- arrayUsers
- changeColor
- getNames

data:

- getTareas

db:

- db.ts

ui:

- fonts

types:

- index.ts
  algunos tipados son:
  - Tarea
  - DraftTarea
  - Tareas
  - User
