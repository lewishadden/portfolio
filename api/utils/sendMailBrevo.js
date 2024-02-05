const SibApiV3Sdk = require("@getbrevo/brevo");

const { BREVO_API_KEY } = import.meta.env;

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

apiInstance.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  BREVO_API_KEY
);

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

sendSmtpEmail.subject = "{{params.subject}}";
sendSmtpEmail.htmlContent =
  "<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>";
sendSmtpEmail.sender = {
  name: "John Doe",
  email: "lewishadden+test@gmail.com",
};
sendSmtpEmail.to = [{ email: "lewishadden@gmail.com", name: "Lewis Hadden" }];
sendSmtpEmail.replyTo = {
  name: "John Doe",
  email: "lewishadden+test@gmail.com",
};
sendSmtpEmail.params = {
  parameter: "My param value",
  subject: "Portfolio test",
};

const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
console.log("API called successfully. Returned data: " + JSON.stringify(data));

// const data = await apiInstance.getAccount();
// const body = await data.json();
// console.log("API called successfully. Returned data: " + JSON.stringify(data));
