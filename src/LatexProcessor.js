"use strict";

var latexParser = require("latex-parser");

export class LatexProcessor {
  constructor(config) {
    this.config = config;
  }

  static availableExtensions() {
    return [".tex"];
  }

  processor(ext) {
    return {
      preProcess(text, filePath) {
        return latexParser.parse(text);
      },
      postProcess(messages, filePath) {
        return {
          messages,
          filePath: filePath ? filePath : "<latex>"
        };
      }
    };
  }
}
