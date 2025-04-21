const kiaApiCall = async (data) => {
  const response = await fetch(process.env.API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_KIA_API_KEY}`,
    },
  });

  return response.json();
};

export default kiaApiCall;
