using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.entities;
using Infrastructure;
using Infrastructure.data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        private iBasketRepository _basketRepository;

        public BasketController(iBasketRepository basketRepository){
            _basketRepository = basketRepository;
        } 
        [HttpGet]
        public async Task<ActionResult<CustomerBasket>> GetBasketById(string id){
            var basket = await _basketRepository.GetBasketAsync(id);
            return Ok(basket ?? new CustomerBasket(id));
        }
        [HttpPost]
        public async Task<ActionResult<CustomerBasket>> UpdateBasket(CustomerBasket basket){
            var updatedBasket = await _basketRepository.UpdateBasketAsync(basket);
            return Ok(updatedBasket);
        }

        [HttpDelete]
        public async Task DeleteBasketAsync(string id){
            await _basketRepository.DeleteBasketAsync(id);
        }
    }
}