using System.Collections.Generic;
using System.Threading.Tasks;

namespace scc_api
{
    public interface IJourneyService
    {
        Task CreateJourney(string journeyName);
        Task<JourneyEntity> GetJourney(string journeyName);
        Task<List<JourneyEntity>> GetJourney();
    }
}