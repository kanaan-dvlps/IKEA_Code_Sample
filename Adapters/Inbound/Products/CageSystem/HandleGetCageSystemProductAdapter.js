const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleGetEventInboundPort } = require('../../../../Ports/Inbound/ContactUs/HandleGetContactUsTicketInboundPort');

const HandleGetContactAdapter = async (id) => {
  try {
    
    const Contact = await HandleGetEventInboundPort(id);
    return Contact;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetContactAdapter };