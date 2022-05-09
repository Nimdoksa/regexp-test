const str = `
010-1234-5678
kdh2365@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=Hulk
The quick brown fow jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)