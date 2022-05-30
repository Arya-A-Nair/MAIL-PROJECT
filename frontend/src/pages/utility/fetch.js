export const POST = async (url, object) => {
    const token = localStorage.getItem("Token");
    let headers;
    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
    } else {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
    }
  
    return fetch('http://localhost:8000/api/' + url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(object),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };