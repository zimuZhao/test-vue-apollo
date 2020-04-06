<template>
    <ul>
        <li v-for="item in curUser" :key="item">
            {{ item }}
        </li>
    </ul>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'user',

  data () {
    return {
      curUser: {}
    }
  },

  apollo: {
    $client: 'a',

    curUser () {
      return {
        query: gql`{
            curUser {
                city
                name
                email
                phone
            }
        }`
      }
    }
  }
}
</script>
