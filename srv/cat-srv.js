const cds = require('@sap/cds');

module.exports = cds.service.impl( async function() {
    const DlvSrv = await cds.connect.to("API_INBOUND_DELIVERY_SRV_0002");
    this.on("READ","DlvHeader", async(req) => {
        /* req.query.where("Country <> '' ") */
        return await DlvSrv.transaction(req).send({
            query: req.query,
            headers: {
                apikey: process.env.apikey
            }
        });
    });
});