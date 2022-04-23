import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././css/styles.css';
import Entry from './word-tracker.js';

$(document).ready(function() {
  $("#user-entry").submit(function(event) {
    event.preventDefault();
    let userEntry = $("#body").val();
    let newEntry = new Entry(userEntry);
    newEntry.wordCount();
    newEntry.vowelCount();
    newEntry.consonantCount();
    $("#word-count-disp").text(userEntry.wordCount());
    $("#vowel-count-disp").text(userEntry.vowelCount());
    $("#cons-count-disp").text(userEntry.consonantCount());
    $("#count-display").show
  });
});