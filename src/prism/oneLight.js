module.exports = {
    plain: {
  
      color: "#383A42",
      backgroundColor: "#FAFAFA",
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
          color: "#A0A1A7",
          fontStyle: "italic"
        },
      },
      {
        types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
        style: {
          color: "#A626A4",
        },
      },
      {
        types: ["boolean"],
        style: {
            color: '#986801'
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
          color: "#986801",
        },
      },
      {
        types: ["attr-name", "variable", "literal-property", 'property'],
        style: {
          color: "#E45649",
        },
      },
      
      {
        types: ["deleted", "string", "attr-value", "template-punctuation"],
        style: {
          color: "#50A14F",
        },
      },
      {
        types: ["selector"],
        style: {
          color: "#383A42",
        },
      },
      {
        types: ["punctuation", "operator"],
        style: {
          color: "#383A42",
        },
      },
      {
        types: ["function"],
        style: {
          color: "#4078F2",
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
        types: ["class-name", "maybe-class-name", "imports"],
        style: {
          color: "#C18401",
        },
      },
      {
        types: ["constant"],
        styles: {
          color: "#383A42"
        }
      },
      {
        types: ["char"],
        style: {
          color: "#50A14F",
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