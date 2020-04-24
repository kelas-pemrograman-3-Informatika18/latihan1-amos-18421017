<template>
  <q-page padding>
    <q-card flat class="q-gutter-md">
      <q-card-section>
          <div class="text-h5">Input Jadwal</div>
          <q-form
               @submit="onSubmit"
               @reset="onReset"
               class="q-mt-lg"
          >
          <div class="q-gutter-md">
              <q-input label="waktu" v-model="waktu" filled :rules="[ val => val && val.length > 0 || 'Tolong isi waktu']"></q-input>
              <q-input label="Judul Kegiatan" v-model="judul" filled :rules="[ val => val && val.length > 0 || 'Tolong isi judul']"></q-input>
              <q-input label="Keterangan" v-model="keterangan" filled :rules="[ val => val && val.length > 0 || 'Tolong isi keterangan']"></q-input>
              <q-btn type="submit" label="Input" color="teal" unelevated></q-btn>
              <q-btn type="reset" label="Reset" color="teal" flat unelevated></q-btn>
          </div>
          </q-form>
      </q-card-section>
    </q-card>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      waktu: null,
      judul: null,
      keterangan: null
    }
  },
  methods: {
    onReset () {
      this.waktu = null
      this.judul = null
      this.keterangan = null
    },
    onSubmit () {
      this.$q.notify({
        type: 'positive',
        message: 'Berhasil Input Jadwal'
      })
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>
