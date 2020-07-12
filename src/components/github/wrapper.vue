<template>
    <div style="display: block ruby; width: 100%; overflow-x: scroll">
        <template v-for="i in github_data">
            <github-card style="margin: 5px" :props="i" :nightMode="nightMode" />
        </template>
    </div>
</template>

<script>
import Card from './onecard'
import axios from 'axios'
import Creation from '../../staticApi/creation';
export default {
    props: ['nightMode'],
    components: {
        'github-card': Card
    },
    data () {
        return {
            creation: Creation,
            github_data: []
        }
    },
    methods: {
        setup () {
            for (let index = this.creation.length -1 ; index >= 0; index--) {
                axios.get('/.netlify/functions/repository', {
                    params: {
                        name: this.creation[index].unique_name
                    }
                }).then(res => {
                    this.github_data.push(res.data.data)
                })
            }
        }
    },
    mounted () {
        this.setup();
    }
}
</script>