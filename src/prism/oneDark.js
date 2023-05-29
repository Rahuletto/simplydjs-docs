module.exports = {
    plain: {
      color: "#abb2bf",
      backgroundColor: "#23272E",
    },
    styles: [
      
      {
        types: ["italic"],
        style: {
          fontStyle: "italic",
        },
      },
      {
        types: ["important", "bold"],
        style: {
          fontWeight: "bold",
        },
      },
      {
        types: ["regex"],
        styles: {
          color: '#C678DD'
        }
      },
      {
        types: ["comment"],
        style: {
          color: "#7F848E",
          fontStyle: "italic"
        },
      },
      {
        types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
        style: {
          color: "#C678DD",
        },
      },
      {
        types: ["boolean"],
        style: {
            color: '#D19A66'
        }
      },
      {
        types: ["property-access"],
        style: {
          color: "#56B6C2"
        }
      },
      {
        types: ["number", "inserted"],
        style: {
          color: "#D19A66",
        },
      },
      {
        types: ["attr-name", "variable", "literal-property", 'property'],
        style: {
          color: "#E06C75",
        },
      },
      
      {
        types: ["deleted", "string", "attr-value", "template-punctuation"],
        style: {
          color: "#98C379",
        },
      },
      {
        types: ["selector"],
        style: {
          color: "#56B6C2",
        },
      },
      {
        types: ["punctuation", "operator"],
        style: {
          color: "#ABB2BF",
        },
      },
      {
        types: ["function"],
        style: {
          color: "#61AFEF",
        },
      },
      {
        types: ["function"],
        languages: ["bash"],
        style: {
          color: "#cf8c4c",
        },
      },
      
      {
        types: ["class-name", "constant", "maybe-class-name", "imports"],
        style: {
          color: "#E5C07B",
        },
      },
      
      {
        types: ["char"],
        style: {
          color: "#98C379",
        },
      },
      {
        types: ["deleted"],
        languages: ['diff'],
        style: {
          color: "#ffdcd7",
          backgroundColor: '#67060c'
        },
      },
  
      {
        types: ["inserted"],
        languages: ['diff'],
        style: {
          color: "#aff5b4",
          backgroundColor: '#033a16'
        },
      },
      
    ],
  }