<template>
  <div>
    <p>Service</p>
    <sourceView :allData="mainData"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainData :{
        description : {
          heading: 'Button',
          paragraph: 'A button is a component of web design.'
        },
        outputCode : [
          '<button class="border px-2 bg-gray-500 text-white"> button 1 </button>', '<button class="border px-2 bg-gray-500 text-white"> button 2 </button>'
        ],
        code : `
        <html>
          <body>
            <div>
              <Button> button 1 </Button>
              <Button> button 2 </Button>
            </div>
          </body>
        </html>
        `
      }
    }
  }
}
</script>

<style></style>
