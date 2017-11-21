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
    public class QAController : ApiController
    {
        DB qaDB = new DB();

        // GET api/QA
        public HttpResponseMessage Get()
        {
            List<Question> allQuestions = qaDB.getAllQuestions();
           
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

        [HttpPost]
        public HttpResponseMessage Post([FromBody]ViewModelQuestion customerQuestion)
        {
            
            if (ModelState.IsValid)
            {
                bool OK = qaDB.SaveCustomerQuestion(customerQuestion);
                if (OK)
                {
                    return new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.OK
                    };
                    
                }
            }
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = new StringContent("Kunne ikke lagre spørsmålet")
            };
        }

        
    }
}
