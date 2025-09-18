import "process";

const kiaApiCallPromociones = async (data, campaign = "") => {
  try {
    const response = await fetch(
      "https://fusio.encender-dev.online/public/kia/lead-register",
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

export default kiaApiCallPromociones;
