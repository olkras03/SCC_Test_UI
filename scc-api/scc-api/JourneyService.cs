using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace scc_api
{
    public class JourneyService : IJourneyService
    {
        private readonly IMongoService<JourneyEntity> _mongoJourney;
        
        public JourneyService(IMongoService<JourneyEntity> mongoJourney)
        {
            _mongoJourney = mongoJourney;
        }

        public async Task CreateJourney(string journeyName)
        {
            var newJourney = new JourneyEntity
            {
                name = journeyName
            };

            await _mongoJourney.collection.InsertOneAsync(newJourney);
        }
        
        public async Task<JourneyEntity> GetJourney(string journeyName)
        {
            var retrievedJourney = await _mongoJourney.collection.Find(journey => journey.name == journeyName).FirstOrDefaultAsync();
            
            return retrievedJourney;
        }
        
        public async Task<List<JourneyEntity>> GetJourney()
        {
            var retrievedJourney = await _mongoJourney.collection.Find(name => true).ToListAsync();
            
            return retrievedJourney;
        }
    }
}