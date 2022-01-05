using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace scc_api
{
    public class MongoService<T> : IMongoService<T>
    {
        public MongoService(IConfiguration config)
        {
            var connectionString = config["Mongo:connectionString"];
            var collectionName = typeof(T).Name;
            var mongoClient = new MongoClient(connectionString);

            _mongoCollection = mongoClient.GetDatabase("test").GetCollection<T>(collectionName);
        }

        private readonly IMongoCollection<T> _mongoCollection;

        public IMongoCollection<T> collection
        {
            get => _mongoCollection;
        }
    }
}