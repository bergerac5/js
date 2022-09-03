let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan ||isGuestTwoVegan) {
    console.log('Make sure to  offer up some vegan option')
} else{
    console.log('Offer up anything on menue')
}