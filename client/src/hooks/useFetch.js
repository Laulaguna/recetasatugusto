

const urlMain = 'http://localhost:3012/'


/**
 * Realiza una consulta al servidor utilizando el método y la URL especificados,
 * y opcionalmente envía un cuerpo de datos en formato JSON.
 * @param {string} url - La URL a la que se enviará la consulta.
 * @param {string} method - El método HTTP a utilizar en la consulta (get, post, put o delete).
 * @param {Object} [body] - El cuerpo de datos a enviar en formato JSON (opcional, solo para post y put).
 * @returns {Promise<Response>} Una promesa que se resuelve en la respuesta del servidor.
 */
export const consulta = async (url, method, body) => {
    let options = {};

    if (method === 'post' || method === 'put') {
        options = {
            method: method,
            body: body, // Directly pass the FormData object
            // Do not set Content-Type header for FormData, it will be set automatically
        };
    } else if (method === 'delete') {
        options = {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    } else if (method === 'get') {
        options = {
            method: method,
        };
    }


    return await fetch(`${urlMain}${url}`, options);
};





