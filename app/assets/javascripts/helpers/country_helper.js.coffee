# initialize app
app              = {}

app.controllers  = {}
app.views        = {}
app.models       = {}
app.countries    = []
app.events       = $.extend({}, Backbone.Events)

class app.models.Country
  constructor: (name, isCountryA = false, isCountryB = false) ->
    @name = name
    @isCountryA = isCountryA
    @isCountryB = isCountryB

class BaseView
  constructor: ->
    app.events.on('calculate', @onCalculate)

  render: ->
    $('#main-container').append @template

class app.views.MainListView extends BaseView
  template: "<div class='country-container' id='main'><div class='title'>main</div></div>"

  onCalculate: ->
    _appendCountryItems(app.countries, '#main')

class app.views.ACountriesListView extends BaseView
  template: "<div class='country-container' id='a'><div class='title'>A</div></div>"

  onCalculate: ->
    countries = (country for country in app.countries when country.isCountryA)
    _appendCountryItems(countries, '#a')

class app.views.BCountriesListView extends BaseView
  template: "<div class='country-container' id='b'><div class='title'>B</div></div>"

  onCalculate: ->
    countries = (country for country in app.countries when country.isCountryB)
    _appendCountryItems(countries, '#b')

_appendCountryItems = (countries, containerSelector) ->
  $container = $(containerSelector)
  $container.find('span').remove()

  countryTemplate = "<span class='country'></span>"

  for country in countries
    do (country) ->
      $item = $(countryTemplate).text(country.name)
                .click ->
                  country.isCountryB = !country.isCountryB
                  app.events.trigger('calculate')

      $container.append $item

class app.controllers.CountryController
  createCountries: ->
    for name in ['China', 'American', 'UK', 'France', 'Brazil', 'Spain', 'Japan']
      app.countries.push new app.models.Country(name)
    @

  showViews: ->
    for view of app.views
      new app.views[view]().render()

    app.events.trigger('calculate')

window.app = app

$ ->
  c = new app.controllers.CountryController
  c.createCountries().showViews()
