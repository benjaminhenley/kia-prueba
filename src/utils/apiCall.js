import "process";

const kiaApiCall = async (data, campaign = "") => {
  try {
    // Create a FormData object
    const formData = new FormData();

    // Add campaign if provided separately (for backward compatibility)
    if (campaign) {
      formData.append("campaign", campaign);
    }

    // Add all data fields to the FormData without modifying the structure
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });

    // Log the form data for debugging (only keys and values)
    const formDataLog = {};
    for (let [key, value] of formData.entries()) {
      formDataLog[key] = value;
    }
    console.log("FormData being sent:", formDataLog);

    // Make the request using FormData
    const response = await fetch("https://www.kia.com.ar/api/apiv1", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer 00D0t00004018uJ!AQ0AQA5qiPp1agKgHxBErgfvmNZBJjXMe0mZ7uoC..IHbItPjC2FDp4SIjgAilkd8Hjj8l2zYGP7iLcmKCmVIWAlPYj2cVpP`,
      },
    });

    return response.json();
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

export default kiaApiCall;
