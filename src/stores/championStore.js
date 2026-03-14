import { defineStore } from 'pinia'

export const useChampionStore = defineStore('champions', {

  state: () => ({
    champions: [],
    currentIndex: 0,
    search: '',
    filter: 'all',
    sort: 'name-asc',
    loading: false,
    error: null,
    votes: JSON.parse(localStorage.getItem("votes")) || {},
    favorites: JSON.parse(localStorage.getItem("favorites")) || []
  }),

  getters: {

    currentChampion(state) {
      return state.champions[state.currentIndex]
    },

    filteredChampions(state) {

      let list = [...state.champions]

      if (state.search) {
        list = list.filter(c =>
          c.name.toLowerCase().includes(state.search.toLowerCase())
        )
      }

      if (state.filter === "favorites") {
        list = list.filter(c => state.favorites.includes(c.id))
      }

      if (state.sort === "name-asc") {
        list.sort((a,b)=> a.name.localeCompare(b.name))
      }

      if (state.sort === "name-desc") {
        list.sort((a,b)=> b.name.localeCompare(a.name))
      }

      return list

    }

  },

  actions: {

    async fetchChampions() {

      this.loading = true

      try {

        const res = await fetch("https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json")
        const data = await res.json()

        this.champions = Object.values(data.data)

      } catch (e) {

        this.error = "Error cargando campeones"

      }

      this.loading = false

    },

    nextChampion(){

      this.currentIndex++

      if(this.currentIndex >= this.champions.length){
        this.currentIndex = 0
      }

    },

    likeChampion(id){

      if(!this.votes[id]) this.votes[id] = {like:0, dislike:0}

      this.votes[id].like++

      localStorage.setItem("votes", JSON.stringify(this.votes))

      this.nextChampion()

    },

    dislikeChampion(id){

      if(!this.votes[id]) this.votes[id] = {like:0, dislike:0}

      this.votes[id].dislike++

      localStorage.setItem("votes", JSON.stringify(this.votes))

      this.nextChampion()

    },

    toggleFavorite(id){

      if(this.favorites.includes(id)){

        this.favorites = this.favorites.filter(f => f !== id)

      }else{

        this.favorites.push(id)

      }

      localStorage.setItem("favorites", JSON.stringify(this.favorites))

    }

  }

})