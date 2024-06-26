using Core.entities;

namespace Core.interfaces
{
    public interface IProductRepository
    {
       Task<Product> GetProductByIdAsync(int id);
       Task<IReadOnlyList<Product>> GetProductsAsync();  
       Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync();  
       Task<IReadOnlyList<ProductType>> GetProductTypesAsync();  
    }
}