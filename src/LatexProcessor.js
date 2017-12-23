"use strict";

module.exports = class LatexProcessor {
  constructor(config) {
    this.config = config;
    this.latexParser = require("latex-parser");
  }

  static availableExtensions() {
    return [".tex"];
  }

  processor(ext) {
    return {
      preProcess(text, filePath) {
        return this.latexParser.parse(text);
      },
      postProcess(messages, filePath) {
        return {
          messages,
          filePath: filePath ? filePath : "<latex>"
        };
      }
    };
  }
};
