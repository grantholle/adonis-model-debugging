'use strict'

const { test, trait } = use('Test/Suite')('Model')
const Movie = use('App/Models/Movie')
trait('DatabaseTransactions')

test('id and tmdb_id are correct', async ({ assert }) => {
  const movie = await Movie.create({
    name: 'Star Wars: The Last Jedi',
    year: 2017,
    tmdb_id: 181808,
    imdb_id: `tt2527336`
  })

  assert.equal(movie.id, 1)
  assert.equal(movie.tmdb_id, 181808)
})
