const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleUpdateEventInboundPort } = require('../../../../Ports/Inbound/ContactUs/HandleUpdateContactUsTicketInboundPort');

const HandleUpdateContactAdapter = async (data) => {
  try {
    
    const UpdatedContact = await HandleUpdateEventInboundPort(data);
    return UpdatedContact;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleUpdateContactAdapter };