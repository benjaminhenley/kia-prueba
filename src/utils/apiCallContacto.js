import "process";

const kiaApiContacto = async (data) => {
  try {
    const response = await fetch(
      "https://fusio.encender-dev.online/public/kia/contacto-web",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify(data), // numbers remain numbers
      }
    );

    return response.json();
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

export default kiaApiContacto;
