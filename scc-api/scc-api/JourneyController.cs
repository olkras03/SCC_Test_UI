using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace scc_api
{
    [Route("api/[controller]")]
    [ApiController]
    public class JourneyController : ControllerBase
    {
        private readonly IJourneyService _journeyService;
        public JourneyController(IJourneyService journeyService)
        {
            _journeyService = journeyService;
        }

        // GET: api/Journey
        [HttpGet]
        public async Task<IEnumerable<JourneyEntity>> Get()
        {
            var journey = await _journeyService.GetJourney();

            return journey;
        }

        // GET: api/Journey/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Journey
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Journey/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Journey/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
