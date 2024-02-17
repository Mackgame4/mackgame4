<template>
  <div>
    <button @click="generatePdf">Generate PDF</button>
    <div id="element-to-convert">
      <h1>PDF Content</h1>
      <p>This is the content of the PDF</p>
    </div>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    generatePdf() {
			html2pdf(document.getElementById('element-to-convert'), {
        margin: 1,
        filename: 'generated.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      });
    }
  }
}
</script>