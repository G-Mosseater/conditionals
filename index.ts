// Here I set the type of data for typescript
type listTypes = {
  name: string;
  dateOfBirth: string;
  children: number;
  country: string;
  knowsHowToProgram: boolean;
};
// variable namelist containts all the information represented by an object in an array
const namelist = [
  {
    name: "Remus Bellows",
    dateOfBirth: "3/21/1977",
    children: 1,
    country: "Norway",
    knowsHowToProgram: false,
  },

  {
    name: "Mohammed Alvaro",
    dateOfBirth: "4/15/2000",
    children: 5,
    country: "Ukraine",
    knowsHowToProgram: false,
  },

  {
    name: "Rasla Blackader",
    dateOfBirth: "5/8/1992",
    children: 0,
    country: "Afghanistan",
    knowsHowToProgram: false,
  },

  {
    name: "Hollyanne Brauns",
    dateOfBirth: "9/19/1984",
    children: 3,
    country: "Brazil",
    knowsHowToProgram: false,
  },

  {
    name: "Hollyanne Brauns",
    dateOfBirth: "9/19/1984",
    children: 3,
    country: "Brazil",
    knowsHowToProgram: false,
  },
  {
    name: "Mira Adao",
    dateOfBirth: "11/22/1980",
    children: 3,
    country: "Czech Republic",
    knowsHowToProgram: false,
  },
];

if (namelist[0].dateOfBirth > namelist[5].dateOfBirth)
  //conditional statement checks if the object's date of birth from index 0 is higher than objects date of birth and index 5
  console.log("Remus is older than the Mira");
// this get's logged if date is higher
else console.log("Remus is younger than Mira"); // this get;s logged if not

if ((namelist[1].children = namelist[2].children))
  //statement checks if the property 'children' is equal for objects at index 1 and 2
  console.log("Mohammed has the same number of children as Rasla");
// logs this string if the statemenet is true
else if (namelist[1].children < namelist[2].children)
  // if object at index 1 has a lower value than object at index 2
  console.log("Mohammed has fewer  children than Rasla");
// this will get logged
else console.log("Mohammed has more children than Rasla"); // if none of the statemens are true, this will be logged

if ((namelist[1].knowsHowToProgram, namelist[3].knowsHowToProgram) === true)
  //the statement checks if the proprieties are equal
  console.log("Yay!"); //logs this if staments it true
else console.log("LMGTFY"); //logs this otherwise

if (namelist[1].country === "Iceland")
  console.log("Hæ!"); //this follows the same rules as above
else if (namelist[1].country === "Spain ") console.log("Hola!");
else if (namelist[1].country === "Korea ") console.log("여보세요!");
else console.log("Hello");

switch (
  namelist[1].country //the switch statement is an alternative to the if/else
) {
  case (namelist[1].country = "Iceland"): //it evaluates one expression (namelist[1].country) and compares values in each case
    console.log("Hæ!"); // if expression = "iceland", logs "Hæ"
    break; // this stops running the code if it evaluates the statement as true
  case (namelist[1].country = "Spain"):
    console.log("Hola!");
    break;
  case (namelist[1].country = "Korea"):
    console.log("여보세요!");
    break;
  default:
    console.log("Hello!");
}

namelist[1].name.length > 5 // checks if the length of the name at index 1 is greater than 5 characters
  ? console.log("Mohammed's name has more than 5 characters") // ?: is the ternary operator that chooses between the following two expressions based on the condition (namelist[1].name.length > 5 ) this is our condition
  : console.log("Mohamed's name has less than 5 characters");
