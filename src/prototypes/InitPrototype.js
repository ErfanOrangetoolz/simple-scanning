/* eslint-disable no-extend-native */
const InitPrototype = {
  init: function () {
    this.isEmpty();
    this.getAvater();
    this.getNameToDisplay();
    this.getNamePartition();
    this.getShortString();
    this.isJsonString();
    this.parseToJson();
    this.checkNumber();
    this.isOnlyNumber();
    this.checkEmail();
    this.checkUrl();
    this.formatNumber();
    this.replaceForJsonString();
    this.stringCapitalize();
    this.replaceScriptTag();
    this.replaceAllHtmlTag();
    this.replaceHeadTag();
  },
  isEmpty: function () {
    String.prototype.isEmpty = function () {
      let result = this;
      if (
        result !== undefined &&
        result != null &&
        result !== "" &&
        result.trim() !== ""
      ) {
        return false;
      }
      return true;
    };
  },
  getAvater: function () {
    String.prototype.getAvater = function (first = "", last = "") {
      let name = "n/a",
        firstName = first !== undefined && first !== null ? first : "",
        lastName = last !== undefined && last !== null ? last : "";

      if (firstName.trim() !== "" && lastName.trim() !== "") {
        name = firstName.charAt(0) + lastName.charAt(0);
      } else if (firstName.trim() !== "") {
        if (firstName.length > 1) {
          name = firstName.charAt(0) + firstName.charAt(1);
        } else {
          name = firstName.charAt(0) + ".";
        }
      } else if (lastName.trim() !== "") {
        if (lastName.length > 1) {
          name = lastName.charAt(0) + lastName.charAt(1);
        } else {
          name = lastName.charAt(0) + ".";
        }
      } else {
        let name_string = this,
          length = name_string.length;

        if (length > 1) {
          name = name_string.charAt(0) + name_string.charAt(1);
        } else if (length === 1) {
          name = name_string.charAt(0) + ".";
        }
      }
      return name.toUpperCase();
    };
  },
  getNameToDisplay: function () {
    String.prototype.getNameToDisplay = function (numberText, emailText) {
      let name = this,
        number =
          numberText !== undefined && numberText !== null ? numberText : "",
        email = emailText !== undefined && emailText !== null ? emailText : "";
      if (
        name !== "undefined" &&
        name !== "null" &&
        name !== "" &&
        name.trim() !== ""
      ) {
        return name;
      } else if (number !== "") {
        return number;
      } else if (email !== "") {
        return email;
      }
      return "No info added !";
    };
  },
  getNamePartition: function () {
    String.prototype.getNamePartition = function () {
      let text = this,
        first_name = text,
        last_name = "";
      text = text.trim();
      if (text !== "") {
        let text_array = text.split(" ");
        if (text_array.length > 1) {
          first_name = text_array[0];
          last_name = text.replace(first_name, "");
          last_name = last_name.trim();
        }
      }
      return { first_name, last_name };
    };
  },
  getShortString: function () {
    String.prototype.getShortString = function (length = 100) {
      let text = this;
      if (
        text !== "undefined" &&
        text !== "null" &&
        text !== "" &&
        text.trim() !== ""
      ) {
        if (text.length > length) {
          return text.substring(0, length) + "...";
        }
      }
      return text;
    };
  },
  isJsonString: function () {
    String.prototype.isJsonString = function () {
      let json = this;
      if (
        json !== "undefined" &&
        json !== "null" &&
        json !== "" &&
        json.trim() !== ""
      ) {
        json = json.replace(/\\/g, "");
        try {
          JSON.parse(json);
        } catch (error) {
          return false;
        }
      }
      return true;
    };
  },
  parseToJson: function () {
    String.prototype.parseToJson = function () {
      let json = this;
      if (
        json !== "undefined" &&
        json !== "null" &&
        json !== "" &&
        json.trim() !== ""
      ) {
        json = json.replace(/\\/g, "");
        try {
          return JSON.parse(json);
        } catch (error) {
          return {};
        }
      }
      return {};
    };
  },
  checkNumber: function () {
    /* country */
  },
  isOnlyNumber: function () {},
  checkEmail: function () {},
  checkUrl: function () {},
  formatNumber: function () {
    /* country */
  },
  replaceForJsonString: function () {
    String.prototype.replaceForJsonString = function (search = "") {
      let json = this;
      if (search === "") {
        return json.replace(/\\/g, "");
      }
      let regex = new RegExp(search, "g");
      return json.replace(regex, "");
    };
  },
  stringCapitalize: function () {
    /* first/all */
  },
  replaceScriptTag: function () {
    String.prototype.replaceScriptTag = function () {
      let text = this;
      let check_script = text.match(/(?<=<script>)(.*)(?=<\/script>)/s);
      if (check_script != null) {
        let regex = new RegExp(check_script[0], "g");
        text = text.replace(regex, "");
        text = text.replace(/<script><\/script>/, "");
      }
      return text;
    };
  },
  replaceHeadTag: function () {
    String.prototype.replaceScriptTag = function () {
      let text = this;
      let check_head_small = text.match(/(?<=<head>)(.*)(?=<\/head>)/s);
      if (check_head_small != null) {
        let regex = new RegExp(check_head_small[0], "g");
        text = text.replace(regex, "");
        text = text.replace(/<script><\/script>/, "");
      }
      let check_head_capital = text.match(/(?<=<HEAD>)(.*)(?=<\/HEAD>)/s);
      if (check_head_capital != null) {
        let regex = new RegExp(check_head_capital[0], "g");
        text = text.replace(regex, "");
        text = text.replace(/<script><\/script>/, "");
      }
      return text;
    };
  },
  replaceAllHtmlTag: function () {
    String.prototype.replaceAllHtmlTag = function () {
      let text = this;
      text = text.replace(/(<([^>]+)>)/gi, "");
      return text;
    };
  },
};
export default InitPrototype;
