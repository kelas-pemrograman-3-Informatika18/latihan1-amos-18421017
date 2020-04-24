<template>
  <q-page padding>
<q-table
      title="jadwal kegiatanku"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="waktu" :props="props">
            {{ props.row.waktu }}
          </q-td>
          <q-td key="judul" :props="props">
            {{ props.row.judul }}
          </q-td>
          <q-td key="keterangan" :props="props">
            {{ props.row.keterangan }}
          </q-td>
          <q-td key="aksi" :props="props">
            <div class="row">
              <div class="col">
                <q-btn label="Edit" color="orange" icon="edit" unelevated></q-btn>
               </div>
              <div class="col">
                <q-btn label="Hapus" color="negative" icon="delete" unelevated></q-btn>
               </div>
              </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'waktu',
          required: true,
          label: 'waktu',
          align: 'left',
          field: 'waktu',
          sortable: true
        },
        { name: 'judul', align: 'center', label: 'judul', field: 'judul', sortable: true },
        { name: 'keterangan', label: 'keterangan', align: 'center', field: 'keterangan', sortable: true },
        { name: 'aksi', label: 'Aksi', field: 'aksi', align: 'center' }
      ],
      data: [
        {
          waktu: '3 April 2020',
          judul: 'Belajar Pemograman 3',
          keterangan: 'Belajar Pemograman 3 Secara Online'
        },
        {
          waktu: '4 April 2020',
          judul: 'Belajar Pemograman 4',
          keterangan: 'Belajar Pemograman 4 Secara Online'
        }
      ]
    }
  }
}
</script>
