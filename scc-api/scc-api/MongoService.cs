using MongoDB.Driver;

namespace scc_api
{
    public class MongoService<T> : IMongoService<T>
    {
        public MongoService()
        {
            var connectionString = "some connection string";
            var collectionName = typeof(T).FullName;
            var mongoClient = new MongoClient(connectionString);

            _mongoCollection = mongoClient.GetDatabase("scc").GetCollection<T>(collectionName);
        }

        private readonly IMongoCollection<T> _mongoCollection;

        public IMongoCollection<T> collection
        {
            get => _mongoCollection;
        }
    }
}