const recipes = [
    {
        title: "French Onion Soup",
        img: "./images/header-img1.jpg",
        rating: 4.7,
        reviews: 267,
        prepTime: "15 min",
        cookTime: "60 min",
        servings: 4,
        level: "Intermediate",
        cuisine: "Mediterranean",
        ingredients: [
            "4 large onions, thinly sliced",
            "1/2 cup white wine",
            "1 liter beef broth",
            "4 tablespoons butter"
        ],
        instruction: [
            "Melt butter in a large pot and caramelize onions for 40 minutes.",
            "Add white wine and deglaze the pot.",
            "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
            "Toast baguette slices.",
            "Top soup with bread and cheese, then broil 3-5 minutes."
        ],
        nutrition: {
            calories: 380,
            protein: "18g",
            carbs: "36g",
            fat: "18g",
            fiber: "4g",
            sodium: "980mg"
        }
    },

    {
        title: "Chicken Alfredo Pasta",
        rating: 4.8,
        reviews: 421,
        img: "./images/header-img2.jpg",
        prepTime: "20 min",
        cookTime: "30 min",
        servings: 3,
        level: "Easy",
        cuisine: "Italian",
        ingredients: [
            "250g fettuccine pasta",
            "2 chicken breasts, sliced",
            "1 cup heavy cream",
            "1 cup grated parmesan",
            "2 tablespoons butter"
        ],
        instruction: [
            "Cook pasta until al dente.",
            "Sauté chicken until golden.",
            "Melt butter, add cream and parmesan to form sauce.",
            "Mix pasta with sauce and chicken.",
            "Serve hot with parsley."
        ],
        nutrition: {
            calories: 520,
            protein: "32g",
            carbs: "45g",
            fat: "22g",
            fiber: "3g",
            sodium: "640mg"
        }
    },

    {
        title: "Beef Tacos",
        rating: 4.2,
        reviews: 310,
        img: "./images/header-img3.jpg",
        prepTime: "10 min",
        cookTime: "15 min",
        servings: 4,
        level: "Easy",
        cuisine: "Mexican",
        ingredients: [
            "500g ground beef",
            "1 packet taco seasoning",
            "8 small tortillas",
            "1 cup shredded lettuce",
            "1 cup cheddar cheese"
        ],
        instruction: [
            "Brown beef in a skillet.",
            "Add taco seasoning and water; let simmer.",
            "Warm tortillas.",
            "Fill tortillas with beef, lettuce, and cheese.",
            "Serve immediately."
        ],
        nutrition: {
            calories: 290,
            protein: "20g",
            carbs: "28g",
            fat: "12g",
            fiber: "2g",
            sodium: "760mg"
        }
    },

    {
        title: "Vegetable Stir Fry",
        rating: 4.6,
        reviews: 189,
        img: "./images/header-img4.jpg",
        prepTime: "15 min",
        cookTime: "10 min",
        servings: 2,
        level: "Easy",
        cuisine: "Asian",
        ingredients: [
            "1 bell pepper, sliced",
            "1 carrot, sliced",
            "1 broccoli head, chopped",
            "2 tablespoons soy sauce",
            "1 tablespoon sesame oil"
        ],
        instruction: [
            "Heat oil in a wok.",
            "Add garlic then vegetables; stir fry 5 minutes.",
            "Add soy sauce and sesame oil.",
            "Cook another 2 minutes.",
            "Serve over rice or noodles."
        ],
        nutrition: {
            calories: 210,
            protein: "8g",
            carbs: "32g",
            fat: "6g",
            fiber: "5g",
            sodium: "540mg"
        }
    },

    {
        title: "Margherita Pizza",
        rating: 4.9,
        reviews: 502,
        img: "./images/header-img5.jpg",
        prepTime: "25 min",
        cookTime: "15 min",
        servings: 2,
        level: "Intermediate",
        cuisine: "Italian",
        ingredients: [
            "1 pizza dough",
            "1/2 cup tomato sauce",
            "200g fresh mozzarella",
            "Fresh basil leaves",
            "1 tablespoon olive oil"
        ],
        instruction: [
            "Spread pizza dough on a tray.",
            "Add tomato sauce evenly.",
            "Place mozzarella slices and basil.",
            "Bake at high heat for 12–15 minutes.",
            "Drizzle olive oil before serving."
        ],
        nutrition: {
            calories: 430,
            protein: "19g",
            carbs: "50g",
            fat: "14g",
            fiber: "3g",
            sodium: "720mg"
        }
    }
];

// ========================================

function changeRecipe() {

    var i = Math.floor(Math.random() * 5);
    var box = ''

    if (i == 1 || i == 3) {
        box =
            `
                <div class="recipe row rounded-5 overflow-hidden border border-1 border-warning border-opacity-25">
                <div class="food-img p-0 col-12 col-lg-4">
                    <div class="position-relative">
                        <div
                            class="d-flex align-items-center gap-2 shadow-lg position-absolute food-rate bg-white py-2 px-3 rounded-4">
                            <i class="fa-solid fa-star text-warning"></i>
                            <span class="fw-bold">${recipes[i].rating}</span>
                            <span class="text-secondary">(${recipe[i].reviews} reviewws)</span>
                        </div>
                        <div class="px-4 py-3 bg-white position-absolute rounded-4 d-flex gap-5 image-details">
                            <div class="d-flex flex-column align-items-center">
                                <i class="pb-2 fs-4 fa-solid fa-clock text-success"></i>
                                <span class="small text-secondary">Prep Time</span>
                                <span class="fw-bolder">${recipes[i].prepTime}</span>
                            </div>
                            <div class="d-flex flex-column align-items-center">
                                <i class="pb-2 fs-4 fa-solid fa-fire-burner text-danger"></i>
                                <span class="small text-secondary">Cook Time</span>
                                <span class="fw-bolder">${recipes[i].cookTime}</span>
                            </div>
                            <div class="d-flex flex-column align-items-center">
                                <i class="pb-2 fs-4 fa-solid fa-users text-primary"></i>
                                <span class="small text-secondary">Servings</span>
                                <span class="fw-bolder">${recipes[i].servings} people</span>
                            </div>
                        </div>
                        <img src="${recipes[i].img}" alt="food image" class="d-header-image">
                    </div>
                </div>
                <div class="food-content col-12 col-lg-8 position-relative bg-white">
                    <div class="content-title d-flex gap-2 pb-2">
                        <div class="d-flex align-items-center bg-success fit-content py-1 px-3 rounded-4 bg-opacity-25">
                            <span class="small text-success fw-bold">${recipes[i].level}</span>
                        </div>
                        <div class="d-flex align-items-center bg-primary fit-content py-1 px-3 rounded-4 bg-opacity-25">
                            <span class="small text-primary fw-bold">${recipes[i].cuisine}</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between pb-2">
                        <div>
                            <h3 class="fs-2 fw-bold">${recipes[i].title}</h3>
                            <p class="text-secondary fs-6 m-0">Sweet and savory chicken over rice with vegetables</p>
                        </div>
                        <div class="d-flex gap-2 align-items-start">
                            <div class="p-3 rounded-3 bg-warning bg-opacity-25 recipe-save">
                                <i class="fa-solid fa-bookmark text-danger"></i>
                            </div>
                            <div class="p-3 rounded-3 bg-warning bg-opacity-25 recipe-share">
                                <i class="fa-solid fa-share-nodes text-danger"></i>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-warning bg-opacity-10 border-start border-5 border-danger rounded-3 d-flex align-items-center gap-2 mb-2">
                        <div>
                        <i class="fa-solid fa-triangle-exclamation text-danger fs-5"></i>
                        </div>
                        <div class="d-flex flex-column">
                        <span>Extended Preparation Time</span>
                        <span class="text-danger">This recipe requires more than 45 minutes to prepare. Plan accordingly!</span>
                        </div>
                    </div>
                    <div class="border-bottom border-secondary border-1 border-opacity-25 pb-4 recipe-details">
                        <ul class="nav nav-pills mb-3 justify-content-between border-bottom border-1 border-secondary border-opacity-25 pb-4 px-4"
                            id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="ingredients-tab" data-bs-toggle="pill"
                                    data-bs-target="#ingredients" type="button" role="tab" aria-controls="ingredients"
                                    aria-selected="true"><span class="fw-bold"><i
                                            class="fa-solid fa-list-check pe-4"></i>
                                        Ingredients
                                    </span></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="instructions-tab" data-bs-toggle="pill"
                                    data-bs-target="#instructions" type="button" role="tab" aria-controls="instructions"
                                    aria-selected="false"><span class="fw-bold"><i
                                            class="fa-solid fa-book-open pe-4"></i>Instructions
                                    </span></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nutrition-tab" data-bs-toggle="pill"
                                    data-bs-target="#nutrition" type="button" role="tab" aria-controls="nutrition"
                                    aria-selected="false"><span class="fw-bold"><i
                                            class="fa-solid fa-chart-pie pe-4"></i>Nutrition
                                    </span></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="chef-tips-tab" data-bs-toggle="pill"
                                    data-bs-target="#chef-tips" type="button" role="tab" aria-controls="chef-tips"
                                    aria-selected="false"><span class="fw-bold"><i
                                            class="fa-solid fa-lightbulb pe-4"></i>Chef's Tips
                                    </span></button>
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="ingredients" role="tabpanel"
                                aria-labelledby="ingredients-tab" tabindex="0">
                                <div class="bg-warning bg-opacity-10 p-4 rounded-4 navs-content">
                                    <div class="d-flex gap-3 align-items-center pb-3">
                                        <div
                                            class="number-bg p-1 rounded-circle d-flex align-items-center justify-content-center">
                                            <span class="text-white small">1</span>
                                        </div>
                                        <span>${recipes[i].ingredients[0]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center pb-3">
                                        <div
                                            class="number-bg p-1 rounded-circle d-flex align-items-center justify-content-center">
                                            <span class="text-white small">2</span>
                                        </div>
                                        <span>${recipes[i].ingredients[1]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center pb-3">
                                        <div
                                            class="number-bg p-1 rounded-circle d-flex align-items-center justify-content-center">
                                            <span class="text-white small">3</span>
                                        </div>
                                        <span>${recipes[i].ingredients[2]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center pb-3">
                                        <div
                                            class="number-bg p-1 rounded-circle d-flex align-items-center justify-content-center">
                                            <span class="text-white small">4</span>
                                        </div>
                                        <span>${recipes[i].ingredients[3]}</span>
                                    </div>

                                </div>
                            </div>
                            <div class="tab-pane fade" id="instructions" role="tabpanel"
                                aria-labelledby="instructions-tab" tabindex="0">
                                <div class="navs-content">
                                    <div class="d-flex gap-3 align-items-center pb-4">
                                        <div
                                            class="number-bg p-4 rounded-4 d-flex align-items-center justify-content-center">
                                            <span class="text-white fs-5 fw-bold">1</span>
                                        </div>
                                        <span>${recipes[i].instruction[0]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center pb-4">
                                        <div
                                            class="number-bg p-4 rounded-4 d-flex align-items-center justify-content-center">
                                            <span class="text-white fs-5 fw-bold">2</span>
                                        </div>
                                        <span>${recipes[i].instruction[1]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center pb-4">
                                        <div
                                            class="number-bg p-4 rounded-4 d-flex align-items-center justify-content-center">
                                            <span class="text-white fs-5 fw-bold">3</span>
                                        </div>
                                        <span>${recipes[i].instruction[2]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center pb-4">
                                        <div
                                            class="number-bg p-4 rounded-4 d-flex align-items-center justify-content-center">
                                            <span class="text-white fs-5 fw-bold">4</span>
                                        </div>
                                        <span>${recipes[i].instruction[3]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center">
                                        <div
                                            class="number-bg p-4 rounded-4 d-flex align-items-center justify-content-center">
                                            <span class="text-white fs-5 fw-bold">5</span>
                                        </div>
                                        <span>${recipes[i].instruction[4]}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nutrition" role="tabpanel" aria-labelledby="nutrition-tab"
                                tabindex="0">
                                <div class="row justify-content-between navs-content">
                                    <div class="p-2 col-12 col-md-6 ">
                                        <div
                                            class="py-3 px-4 d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded-4">
                                            <div class="bg-danger bg-opacity-25 p-3 rounded-4">
                                                <i class="fa-solid fa-fire text-danger"></i>
                                            </div>
                                            <span class="me-auto ps-3 fw-medium">Calories</span>
                                            <span class="fs-5 fw-bold">${recipes[i].nutrition.calories} kcal</span>
                                        </div>
                                    </div>
                                    <div class="p-2 col-12 col-md-6 ">
                                        <div
                                            class="py-3 px-4 d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded-4">
                                            <div class="bg-primary bg-opacity-10 p-3 rounded-4">
                                                <i class="fa-solid fa-dumbbell text-primary"></i>
                                            </div>
                                            <span class="me-auto ps-3 fw-medium">Protein</span>
                                            <span class="fs-5 fw-bold">${recipes[i].nutrition.protein}</span>
                                        </div>
                                    </div>
                                    <div class="p-2 col-12 col-md-6 ">
                                        <div
                                            class="py-3 px-4 d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded-4">
                                            <div class="bg-warning bg-opacity-10 p-3 rounded-4">
                                                <i class="fa-solid fa-wheat-awn text-warning"></i>
                                            </div>
                                            <span class="me-auto ps-3 fw-medium">Carbohydrates</span>
                                            <span class="fs-5 fw-bold">${recipes[i].nutrition.carbs}</span>
                                        </div>
                                    </div>
                                    <div class="p-2 col-12 col-md-6 ">
                                        <div
                                            class="py-3 px-4 d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded-4">
                                            <div class="bg-danger bg-opacity-10 p-3 rounded-4">
                                                <i class="fa-solid fa-droplet text-danger"></i>
                                            </div>
                                            <span class="me-auto ps-3 fw-medium">Fat</span>
                                            <span class="fs-5 fw-bold">${recipes[i].nutrition.fat}</span>
                                        </div>
                                    </div>
                                    <div class="p-2 col-12 col-md-6 ">
                                        <div
                                            class="py-3 px-4 d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded-4">
                                            <div class="bg-success bg-opacity-10 p-3 rounded-4">
                                                <i class="fa-solid fa-seedling text-success"></i>
                                            </div>
                                            <span class="me-auto ps-3 fw-medium">Fiber</span>
                                            <span class="fs-5 fw-bold">${recipes[i].nutrition.fiber}</span>
                                        </div>
                                    </div>
                                    <div class="p-2 col-12 col-md-6 ">
                                        <div
                                            class="py-3 px-4 d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded-4">
                                            <div class="bg-info bg-opacity-10 p-3 rounded-4">
                                                <i class="fa-solid fa-cube text-info"></i>
                                            </div>
                                            <span class="me-auto ps-3 fw-medium">Sodium</span>
                                            <span class="fs-5 fw-bold">${recipes[i].nutrition.sodium}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="chef-tips" role="tabpanel" aria-labelledby="chef-tips-tab"
                                tabindex="0">
                                <div class="navs-content">
                                    <div
                                        class="d-flex align-items-center gap-2 bg-warning bg-opacity-10 py-3 px-4 rounded-3 border-start border-5 border-warning mb-3">
                                        <div
                                            class="d-flex align-items-center justify-content-center p-2 bg-success bg-opacity-75 fit-content rounded-circle p-2 number-bg">
                                            <i class="fa-solid fa-check text-white"></i>
                                        </div>
                                        <span>Use chicken thighs for juicier meat</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 bg-warning bg-opacity-10 py-3 px-4 rounded-3 border-start border-5 border-warning mb-3">
                                        <div
                                            class="d-flex align-items-center justify-content-center p-2 bg-success bg-opacity-75 fit-content rounded-circle p-2 number-bg">
                                            <i class="fa-solid fa-check text-white"></i>
                                        </div>
                                        <span>Make homemade teriyaki sauce for better flavor control</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 bg-warning bg-opacity-10 py-3 px-4 rounded-3 border-start border-5 border-warning mb-3">
                                        <div
                                            class="d-flex align-items-center justify-content-center p-2 bg-success bg-opacity-75 fit-content rounded-circle p-2 number-bg">
                                            <i class="fa-solid fa-check text-white"></i>
                                        </div>
                                        <span>Add edamame for extra protein</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 bg-warning bg-opacity-10 py-3 px-4 rounded-3 border-start border-5 border-warning mb-3">
                                        <div
                                            class="d-flex align-items-center justify-content-center p-2 bg-success bg-opacity-75 fit-content rounded-circle p-2 number-bg">
                                            <i class="fa-solid fa-check text-white"></i>
                                        </div>
                                        <span>Meal prep by cooking rice and chicken ahead</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-3">
                        <button onclick="changeRecipe()" class="btn rounded-4 px-4 py-3 try-btn">
                            <span class="text-white fw-bold"><i class="fa-solid fa-rotate pe-4"></i> Try Another
                                Recipe</span>
                        </button>
                    </div>
                </div>
            </div>
    `
    }
    else {
        box = `
                <div class="recipe row rounded-5 overflow-hidden border border-1 border-warning border-opacity-25">
                <div class="food-img p-0 col-12 col-lg-4">
                    <div class="position-relative">
                        <div
                            class="d-flex align-items-center gap-2 shadow-lg position-absolute food-rate bg-white py-2 px-3 rounded-4">
                            <i class="fa-solid fa-star text-warning"></i>
                            <span class="fw-bold">${recipes[i].rating}</span>
                            <span class="text-secondary">(${recipes[i].reviews} reviewws)</span>
                        </div>
                        <div class="px-4 py-3 bg-white position-absolute rounded-4 d-flex gap-5 image-details">
                            <div class="d-flex flex-column align-items-center">
                                <i class="pb-2 fs-4 fa-solid fa-clock text-success"></i>
                                <span class="small text-secondary">Prep Time</span>
                                <span class="fw-bolder">${recipes[i].prepTime}</span>
                            </div>
                            <div class="d-flex flex-column align-items-center">
                                <i class="pb-2 fs-4 fa-solid fa-fire-burner text-danger"></i>
                                <span class="small text-secondary">Cook Time</span>
                                <span class="fw-bolder">${recipes[i].cookTime}</span>
                            </div>
                            <div class="d-flex flex-column align-items-center">
                                <i class="pb-2 fs-4 fa-solid fa-users text-primary"></i>
                                <span class="small text-secondary">Servings</span>
                                <span class="fw-bolder">${recipes[i].servings} people</span>
                            </div>
                        </div>
                        <img src="${recipes[i].img}" alt="food image" class="header-image">
                    </div>
                </div>
                <div class="food-content col-12 col-lg-8 position-relative bg-white">
                    <div class="content-title d-flex gap-2 pb-2">
                        <div class="d-flex align-items-center bg-success fit-content py-1 px-3 rounded-4 bg-opacity-25">
                            <span class="small text-success fw-bold">${recipes[i].level}</span>
                        </div>
                        <div class="d-flex align-items-center bg-primary fit-content py-1 px-3 rounded-4 bg-opacity-25">
                            <span class="small text-primary fw-bold">${recipes[i].cuisine}</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between pb-5">
                        <div>
                            <h3 class="fs-2 fw-bold">${recipes[i].title}</h3>
                            <p class="text-secondary fs-6 m-0">Sweet and savory chicken over rice with vegetables</p>
                        </div>
                        <div class="d-flex gap-2 align-items-start">
                            <div class="p-3 rounded-3 bg-warning bg-opacity-25 recipe-save">
                                <i class="fa-solid fa-bookmark text-danger"></i>
                            </div>
                            <div class="p-3 rounded-3 bg-warning bg-opacity-25 recipe-share">
                                <i class="fa-solid fa-share-nodes text-danger"></i>
                            </div>
                        </div>
                    </div>
                    <div class="border-bottom border-secondary border-1 border-opacity-25 pb-4 recipe-details">
                        <ul class="nav nav-pills mb-3 justify-content-between border-bottom border-1 border-secondary border-opacity-25 pb-4 px-4"
                            id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="ingredients-tab" data-bs-toggle="pill"
                                    data-bs-target="#ingredients" type="button" role="tab" aria-controls="ingredients"
                                    aria-selected="true"><span class="fw-bold"><i
                                            class="fa-solid fa-list-check pe-4"></i>
                                        Ingredients
                                    </span></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="instructions-tab" data-bs-toggle="pill"
                                    data-bs-target="#instructions" type="button" role="tab" aria-controls="instructions"
                                    aria-selected="false"><span class="fw-bold"><i
                                            class="fa-solid fa-book-open pe-4"></i>Instructions
                                    </span></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nutrition-tab" data-bs-toggle="pill"
                                    data-bs-target="#nutrition" type="button" role="tab" aria-controls="nutrition"
                                    aria-selected="false"><span class="fw-bold"><i
                                            class="fa-solid fa-chart-pie pe-4"></i>Nutrition
                                    </span></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="chef-tips-tab" data-bs-toggle="pill"
                                    data-bs-target="#chef-tips" type="button" role="tab" aria-controls="chef-tips"
                                    aria-selected="false"><span class="fw-bold"><i
                                            class="fa-solid fa-lightbulb pe-4"></i>Chef's Tips
                                    </span></button>
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="ingredients" role="tabpanel"
                                aria-labelledby="ingredients-tab" tabindex="0">
                                <div class="bg-warning bg-opacity-10 p-4 rounded-4 navs-content">
                                    <div class="d-flex gap-3 align-items-center pb-3">
                                        <div
                                            class="number-bg p-1 rounded-circle d-flex align-items-center justify-content-center">
                                            <span class="text-white small">1</span>
                                        </div>
                                        <span>${recipes[i].ingredients[0]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center pb-3">
                                        <div
                                            class="number-bg p-1 rounded-circle d-flex align-items-center justify-content-center">
                                            <span class="text-white small">2</span>
                                        </div>
                                        <span>${recipes[i].ingredients[1]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center pb-3">
                                        <div
                                            class="number-bg p-1 rounded-circle d-flex align-items-center justify-content-center">
                                            <span class="text-white small">3</span>
                                        </div>
                                        <span>${recipes[i].ingredients[2]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center pb-3">
                                        <div
                                            class="number-bg p-1 rounded-circle d-flex align-items-center justify-content-center">
                                            <span class="text-white small">4</span>
                                        </div>
                                        <span>${recipes[i].ingredients[3]}</span>
                                    </div>

                                </div>
                            </div>
                            <div class="tab-pane fade" id="instructions" role="tabpanel"
                                aria-labelledby="instructions-tab" tabindex="0">
                                <div class="navs-content">
                                    <div class="d-flex gap-3 align-items-center pb-4">
                                        <div
                                            class="number-bg p-4 rounded-4 d-flex align-items-center justify-content-center">
                                            <span class="text-white fs-5 fw-bold">1</span>
                                        </div>
                                        <span>${recipes[i].instruction[0]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center pb-4">
                                        <div
                                            class="number-bg p-4 rounded-4 d-flex align-items-center justify-content-center">
                                            <span class="text-white fs-5 fw-bold">2</span>
                                        </div>
                                        <span>${recipes[i].instruction[1]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center pb-4">
                                        <div
                                            class="number-bg p-4 rounded-4 d-flex align-items-center justify-content-center">
                                            <span class="text-white fs-5 fw-bold">3</span>
                                        </div>
                                        <span>${recipes[i].instruction[2]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center pb-4">
                                        <div
                                            class="number-bg p-4 rounded-4 d-flex align-items-center justify-content-center">
                                            <span class="text-white fs-5 fw-bold">4</span>
                                        </div>
                                        <span>${recipes[i].instruction[3]}</span>
                                    </div>
                                    <div class="d-flex gap-3 align-items-center">
                                        <div
                                            class="number-bg p-4 rounded-4 d-flex align-items-center justify-content-center">
                                            <span class="text-white fs-5 fw-bold">5</span>
                                        </div>
                                        <span>${recipes[i].instruction[4]}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nutrition" role="tabpanel" aria-labelledby="nutrition-tab"
                                tabindex="0">
                                <div class="row justify-content-between navs-content">
                                    <div class="p-2 col-12 col-md-6 ">
                                        <div
                                            class="py-3 px-4 d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded-4">
                                            <div class="bg-danger bg-opacity-25 p-3 rounded-4">
                                                <i class="fa-solid fa-fire text-danger"></i>
                                            </div>
                                            <span class="me-auto ps-3 fw-medium">Calories</span>
                                            <span class="fs-5 fw-bold">${recipes[i].nutrition.calories} kcal</span>
                                        </div>
                                    </div>
                                    <div class="p-2 col-12 col-md-6 ">
                                        <div
                                            class="py-3 px-4 d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded-4">
                                            <div class="bg-primary bg-opacity-10 p-3 rounded-4">
                                                <i class="fa-solid fa-dumbbell text-primary"></i>
                                            </div>
                                            <span class="me-auto ps-3 fw-medium">Protein</span>
                                            <span class="fs-5 fw-bold">${recipes[i].nutrition.protein}</span>
                                        </div>
                                    </div>
                                    <div class="p-2 col-12 col-md-6 ">
                                        <div
                                            class="py-3 px-4 d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded-4">
                                            <div class="bg-warning bg-opacity-10 p-3 rounded-4">
                                                <i class="fa-solid fa-wheat-awn text-warning"></i>
                                            </div>
                                            <span class="me-auto ps-3 fw-medium">Carbohydrates</span>
                                            <span class="fs-5 fw-bold">${recipes[i].nutrition.carbs}</span>
                                        </div>
                                    </div>
                                    <div class="p-2 col-12 col-md-6 ">
                                        <div
                                            class="py-3 px-4 d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded-4">
                                            <div class="bg-danger bg-opacity-10 p-3 rounded-4">
                                                <i class="fa-solid fa-droplet text-danger"></i>
                                            </div>
                                            <span class="me-auto ps-3 fw-medium">Fat</span>
                                            <span class="fs-5 fw-bold">${recipes[i].nutrition.fat}</span>
                                        </div>
                                    </div>
                                    <div class="p-2 col-12 col-md-6 ">
                                        <div
                                            class="py-3 px-4 d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded-4">
                                            <div class="bg-success bg-opacity-10 p-3 rounded-4">
                                                <i class="fa-solid fa-seedling text-success"></i>
                                            </div>
                                            <span class="me-auto ps-3 fw-medium">Fiber</span>
                                            <span class="fs-5 fw-bold">${recipes[i].nutrition.fiber}</span>
                                        </div>
                                    </div>
                                    <div class="p-2 col-12 col-md-6 ">
                                        <div
                                            class="py-3 px-4 d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded-4">
                                            <div class="bg-info bg-opacity-10 p-3 rounded-4">
                                                <i class="fa-solid fa-cube text-info"></i>
                                            </div>
                                            <span class="me-auto ps-3 fw-medium">Sodium</span>
                                            <span class="fs-5 fw-bold">${recipes[i].nutrition.sodium}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="chef-tips" role="tabpanel" aria-labelledby="chef-tips-tab"
                                tabindex="0">
                                <div class="navs-content">
                                    <div
                                        class="d-flex align-items-center gap-2 bg-warning bg-opacity-10 py-3 px-4 rounded-3 border-start border-5 border-warning mb-3">
                                        <div
                                            class="d-flex align-items-center justify-content-center p-2 bg-success bg-opacity-75 fit-content rounded-circle p-2 number-bg">
                                            <i class="fa-solid fa-check text-white"></i>
                                        </div>
                                        <span>Use chicken thighs for juicier meat</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 bg-warning bg-opacity-10 py-3 px-4 rounded-3 border-start border-5 border-warning mb-3">
                                        <div
                                            class="d-flex align-items-center justify-content-center p-2 bg-success bg-opacity-75 fit-content rounded-circle p-2 number-bg">
                                            <i class="fa-solid fa-check text-white"></i>
                                        </div>
                                        <span>Make homemade teriyaki sauce for better flavor control</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 bg-warning bg-opacity-10 py-3 px-4 rounded-3 border-start border-5 border-warning mb-3">
                                        <div
                                            class="d-flex align-items-center justify-content-center p-2 bg-success bg-opacity-75 fit-content rounded-circle p-2 number-bg">
                                            <i class="fa-solid fa-check text-white"></i>
                                        </div>
                                        <span>Add edamame for extra protein</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 bg-warning bg-opacity-10 py-3 px-4 rounded-3 border-start border-5 border-warning mb-3">
                                        <div
                                            class="d-flex align-items-center justify-content-center p-2 bg-success bg-opacity-75 fit-content rounded-circle p-2 number-bg">
                                            <i class="fa-solid fa-check text-white"></i>
                                        </div>
                                        <span>Meal prep by cooking rice and chicken ahead</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-3">
                        <button onclick="changeRecipe()" class="btn rounded-4 px-4 py-3 try-btn">
                            <span class="text-white fw-bold"><i class="fa-solid fa-rotate pe-4"></i> Try Another
                                Recipe</span>
                        </button>
                    </div>
                </div>
            </div>
    `
    }

    document.getElementById('Recipe').innerHTML = box
}