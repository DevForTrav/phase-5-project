# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Seeding data..."

users = User.create([
    {
        first_name: "Travis",
        last_name: "Courtney",
        email: "travis@angry-fly.com",
        age: 26,
        profile_image: "Test",
        is_verified: true,
        password_digest: "Password123"
    },
    {
        first_name: "Kat",
        last_name: "White",
        email: "travis@angry-fly.com",
        age: 24,
        profile_image: "Test",
        is_verified: false,
        password_digest: "Password123"
    },
    {
        first_name: "Kenny",
        last_name: "Wright",
        email: "travis@angry-fly.com",
        age: 22,
        profile_image: "Test",
        is_verified: false,
        password_digest: "Password123"
    },
    {
        first_name: "Jen",
        last_name: "Lauphlin",
        email: "travis@angry-fly.com",
        age: 34,
        profile_image: "Test",
        is_verified: false,
        password_digest: "Password123"
    }
])


coffee_shops = CoffeeShop.create([
    {
        name: "Revocup",
        house_roasted: true,
        roaster_name: "Revocup"
    },
    {
        name: "Catalyst",
        house_roasted: false,
        roaster_name: "Unknown"
    },
    {
        name: "Starbacks",
        house_roasted: true,
        roaster_name: "Starbucks"
    }
])

locations = Location.create([
    {
        street_address: "Test",
        city: "Overland Park",
        state: "KS",
        coffee_shop_id: 1
    },
    {
        street_address: "Test",
        city: "Greeneville",
        state: "TN",
        coffee_shop_id: 2
    },
    {
        street_address: "Test",
        city: "Asheville",
        state: "NC",
        coffee_shop_id: 3
    },
])

reviews = Review.create([
    {
        title: "Good but not much service",
        description: "Barista just took our order and called the number after it was made. Not any interaction outside of that.",
        overall_rating: 3.2,
        ambience_description: "It is what it is.",
        beverage_rating: 4.2,
        service_rating: 1.4,
        location_id: 2,
        user_id: 2
    },
    {
        title: "Drink had a weird aftertaste",
        description: "Cool place, but my machiato had a weird aftertaste.",
        overall_rating: 3.2,
        ambience_description: "It is what it is.",
        beverage_rating: 4.2,
        service_rating: 1.4,
        location_id: 2,
        user_id: 1
    },
    {
        title: "Great place for quiet study",
        description: "Was the perfect environment to study for my stressful finals coming up.",
        overall_rating: 3.2,
        ambience_description: "It is what it is.",
        beverage_rating: 4.2,
        service_rating: 1.4,
        location_id: 2,
        user_id: 4
    },
    {
        title: "Meh",
        description: "Very loud and crowded. The service was obviously very busy, and kind of rude.",
        overall_rating: 3.2,
        ambience_description: "It is what it is.",
        beverage_rating: 4.2,
        service_rating: 1.4,
        location_id: 2,
        user_id: 3
    },
])


comments = Comment.create([
    {
        comment_body: "Yeah, so did my mocha!",
        user_id: 2,
        review_id:2 
    },
    {
        comment_body: "Was it busy? When I went, Lucy was very friendly.",
        user_id: 3,
        review_id: 1 
    },
    {
        comment_body: "The is more of a party atmosphere. Think of it as more of a bar.",
        user_id: 4,
        review_id: 4
    },
    {
        comment_body: "Love going here to focus on anything school related!",
        user_id: 1,
        review_id: 3
    },
]) 

favorites = Favorite.create([
    {
        is_favorited: false,
        user_id: 1,
        location_id: 1,
        coffee_shop_id: 1
    },
    {
        is_favorited: false,
        user_id: 1,
        location_id: 2,
        coffee_shop_id: 2
    },
    {
        is_favorited: false,
        user_id: 1,
        location_id: 3,
        coffee_shop_id: 3
    },
    {
        is_favorited: false,
        user_id: 1,
        location_id: 4,
        coffee_shop_id: 4
    },
])


puts "Created #{users.length} users, #{coffee_shops.length} coffee shops, #{locations.length} locations, #{reviews.length} reviews, #{comments.length} comments, #{favorites.length} favorites."
puts "Seeding complete."