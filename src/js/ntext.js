define(
  "ntext", [],
  function() {
    var ntextObj = {};

    ntextObj.printNeon = function(st) {
      var i = 0;
      var self = this;
      this.id = setInterval(function() {
        self.putSymbol(st.charAt(i));
        i++;
        if (i == st.length) clearInterval(self.id);
      }, Math.random() * 250 + 1)

    };

    ntextObj.isKyr = function(s) {
      return /[а-я, 0-9]/i.test(s);
    };

    ntextObj.isLat = function(s) {
      return /[a-z]/i.test(s);
    };

    ntextObj.putSymbol = function(s) {

      var symbol = {
        '(': 'symbol01',
        '!': 'symbol02',
        '?': 'symbol03',
        ')': 'symbol04',
        '"': 'symbol05',
        '/': 'symbol06',
        '|': 'symbol07',
        "'": 'symbol09',
        '.': 'symbol10',
        ':': 'symbol11',
        ']': 'symbol12',
        ';': 'symbol13',
        '*': 'symbol14',
        ',': 'symbol15'
      };
      var Image;;
      s = s.toLowerCase();
      var specsymbol = false;
      if (s == " ") {
        resultEl.appendChild(document.createTextNode("____"));
      } else {
        if (s == "~") {
          resultEl.appendChild(document.createElement("BR"));
        } else {
          for (var key in symbol) {
            if (key == s) {
              specsymbol = true;
            }
          }
          if (specsymbol) {
            Image = document.createElement("IMG");
            Image.src = 'neon/' + symbol[s] + '.gif';
            resultEl.appendChild(Image);
          } else {
            Image = document.createElement("IMG");
            Image.src = 'neon/' + s + '.gif';
            resultEl.appendChild(Image);
          }
          specsymbol = false;
        }
      }
    }


    ntextObj.inputNeon = function(call) {
      var st = '';
      var self = this;
      var unlock = true;
      document.addEventListener('keydown', function(e) {
        if (unlock) {
          var s = e.key;
          if ((self.isKyr(s) || self.isLat(s)) &&
            !(e.ctrlKey || e.shiftKey || e.altKey)) {
            if (s.charCodeAt(0) != 69 && s.charCodeAt(0) != 66) {
              st += s;
              self.putSymbol(s);
              console.log('Code =>', s.charCodeAt(0));
            } else {
              if (s.charCodeAt(0) != 66) {
                self.putSymbol('~');
                unlock = false;
                call(st);
              } else {
                // resultEl.remove();
              }
            }
          };
        }
      });
    }

    return ntextObj;
  }
);
