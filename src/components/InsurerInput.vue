
<template>
  <section class="insurer">
		<div class="wrapper">
      <h1 class="light">Commercial Property - Add Field</h1>
      <div class="row content-wrapper">
        <div class="col-sm-3 field-types">
          <section>
            <h3 class="m-b-sm">Field Types</h3>
            <div class="form-group m-b-md">
              <label for="filter-types">Filter Types</label>
              <input type="text" class="form-control" name="filter-types" id="filter-types" v-model="filter">
            </div>
            <div class="tile m-b-md" v-for="item in filteredItems" :key="item.type" @click="changeDefaultValueType(item.type)" :class="[item.type === defaultValue ? 'active' : '', 'tile', 'm-b-md']">
              <h4 class="m-b-sm">
                <img class="icon" :src="'/src/assets/img/' + item.imgPath + '.svg'" alt="Text">
                {{item.title}}
              </h4>
              <div class="m-b-sm">
                <p class="small">Definition</p>
                <p>{{item.definition}}</p>
              </div>
              <div class="m-b-sm">
                <p class="small">Default Display</p>
                <p>{{item.display}}</p>
              </div>
            </div>
          </section>
        </div>
        <div class="col-sm-9 field-details">
          <section>
            <h3 class="m-b-sm">Field Details</h3>
            <div class="row">
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group m-b-md">
                      <label for="display-label">Display Label</label>
                      <input type="text" class="form-control" name="display-label" id="display-label" v-model="displayName" @blur="createRefName(displayName)">
                      <p class="small">For display purposes, spaces allowed</p>
                    </div>
                    <div class="form-group m-b-md">
                      <label for="default-value">Default Value</label>
                      <input :type="defaultValue" class="form-control" name="default-value" id="default-value">
                    </div>
                    <div class="form-group m-b-md">
                      <label for="cust-val">Custom Validation</label>
                      <input type="text" class="form-control" name="custom-validation" id="cust-val">
                      <p class="small">Any regex can be used for custom input validation</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group m-b-md">
                      <label for="ref-name">Reference Name</label>
                      <input type="text" class="form-control" name="ref-name" id="ref-name" v-model="refName" disabled>
                      <p class="small">Used to reference in calculations, no spaces allowed</p>
                    </div>
                  </div>
                </div>
                
                <div class="row">
                  <h4 class="m-b-md m-l-sm">Tags</h4>
                  <div class="col-md-6">
                    <p>Tag Group</p>
                    <span class="label label-default" @click="populateTags('vinmaster')">Vinmaster</span>
                    <span class="label label-default" @click="populateTags('iso')">ISO</span>
                    <span class="label label-default" @click="populateTags('tag3')">Tag 3</span>
                  </div>
                  <div class="col-sm-6">
                    <p class="m-b-sm">Tags</p>
                    <div v-if="!tagSelected">
                      <p class="small"><em>select a tag group to see individual tags</em></p>
                    </div>
                    <div v-else>
                      <span class="label label-default" v-for="(tag, index) in tags" :key="index">{{tag}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                  <section class="field-groups">
                    <h4>Field Groups</h4>
                    <p class="small m-b-sm">Choose a group for this input</p>
                    <div class="tile m-b-md">
                      <p class="bold m-b-sm">Rental Vehicle Coverage Package</p>
                      <p class="small">7 other inputs</p>
                    </div>
                    <button class="clear">
                      Add A New Group
                    </button>
                  </section>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="btn-turq-group m-t-md">
        <button>
          Save Changes
        </button>
        <span class="right">
          <button class="cancel m-r-md">
            Cancel Changes
          </button>
          <button class="delete">
            Delete Input
          </button>
        </span>
      </div>
    </div>
	</section>
</template>

<script>
export default {
  name: 'InsurerInput',
  data () {
    return {
      displayName: '',
      refName: '',
      defaultValue: 'text',
      fieldTypes: [
        {
          title: 'Text',
          type: 'test',
          definition: 'String of text',
          display: 'Free-form text input',
          imgPath: 'text'
        },
        {
          title: 'Date',
          type: 'date',
          definition: 'Standard ISO format date',
          display: 'Datepicker, with configurable format',
          imgPath: 'date'
        },
        {
          title: 'VIN',
          type: 'number',
          definition: 'Vehicle Identification Number',
          display: 'Free-form text input',
          imgPath: 'vin'
        }
      ],
      filter: '',
      tags: [],
      tagSelected: false,
      tagGroups: {
        vinmaster: ['car make', 'car model', 'year built'],
        iso: ['tag1', 'tag2', 'tag3'],
        tag3: ['tag4', 'tag5', 'tag6']
      }
    }
  },
  computed: {
    filteredItems () {
      var self = this
      return this.fieldTypes.filter((item) => {
        return item.title.toLowerCase().includes(self.filter.toLowerCase())
      })
    }
  },
  methods: {
    createRefName (displayName) {
      this.refName = displayName.trim().replace(/\s/g, '_').toLowerCase()
    },
    changeDefaultValueType (type) {
      this.defaultValue = type
    },
    populateTags (tagGroupName) {
      this.tagSelected = true
      this.tags = []
      this.tags = this.tagGroups[tagGroupName].slice(0)
    }
  }
}
</script>
