using SPA_kunde_ng2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace SPA_kunde_ng2.Controllers
{
    public class CustomerQAController : ApiController
    {
        DB qaDB = new DB();

        // GET api/QA
        public HttpResponseMessage Get()
        {
            List<CustomerQuestion> allQuestions = qaDB.getAllCustomerQuestions();

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(allQuestions);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };

            /* alternativ til return-koden over - for å forklare dette bedre :
            
            var respons = new HttpResponseMessage();
            respons.Content = new StringContent(JsonString, Encoding.UTF8, "application/json");
            respons.StatusCode = HttpStatusCode.OK;
            return respons;
            
             */

        }
    }
}
