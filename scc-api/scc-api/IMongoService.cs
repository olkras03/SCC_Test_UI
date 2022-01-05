using MongoDB.Driver;

namespace scc_api
{
    public interface IMongoService<T>
    {
        IMongoCollection<T> collection { get; }
    }
}