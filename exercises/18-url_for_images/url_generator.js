function generateUrlImage(title) {
	const no_spaces = title.replace(RegExp(" ", "g"), "-")
	return no_spaces.toLowerCase() + ".jpg"
}

const url = generateUrlImage("Hello World")
console.log("Image URL: " + url)
