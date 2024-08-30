export async function listUsers() {
    // Haz una solicitud HTTP GET al servidor para obtener la lista de usuarios
    const response = await fetch("http://localhost:3000/users");
   
    // Convierte la respuesta en un objeto JavaScript, en este caso, un array de usuarios
    const users = await response.json();
   
    // Recorre el array de usuarios y crea un string formateado para cada uno
    const formattedUsers = users
      .map(
        (user) =>
          `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`
      )
      .join(",\n");
   
    // Imprime en la consola el array de usuarios formateado como un string
    console.log(`[\n${formattedUsers}\n]`);
  }