# Incorrect compilation of setRangeText call
Run ./test.sh to produce the sample (demo.dart) with dart2js and dartdevc

## From dart2js (correct) (see dart2jsresult.js)
      C.InputElement_methods.setRangeText$4$end$selectionMode$start(H.interceptedTypeCheck(t1, "$isInputElement"), "This One", 2, "start", 1);

## From dartdevc (incorrect) (see ddcresult.js)
    element.setRangeText("This One", {start: 1, end: 2, selectionMode: "start"});

