using System;
using Xunit;
using WebAPI.Models;
using WebAPI.DataAccessLayer;
using WebAPI.Controllers;
using Moq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;

namespace UnitTests
{
    
    public class PeopleControllerTest    {

        public Mock<PeopleController> mock = new Mock<PeopleController>();

        [Fact]
        public async void GetPeopleTest()
        {
            // Arrange
        }
    }
}
