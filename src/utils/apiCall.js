import "process";

const kiaApiCall = async (data, campaign = "") => {
  try {
    const response = await fetch("https://www.kia.com.ar/api/apiv1", {
      method: "POST",
      body: JSON.stringify({ ...data, campaign }),
      headers: {
        Authorization: `Bearer 00D0t00004018uJ!AQ0AQA5qiPp1agKgHxBErgfvmNZBJjXMe0mZ7uoC..IHbItPjC2FDp4SIjgAilkd8Hjj8l2zYGP7iLcmKCmVIWAlPYj2cVpP`,
      },
    });

    return response.json();
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

export default kiaApiCall;
