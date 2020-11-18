'use strict'

const fileType = require('file-type')
const Sharp = require('sharp')
const fileSize = require('filesize')
const fs = require('fs')

class Image extends Sharp {
  constructor (imageFile) {
    super(imageFile)
    this.imageFile = imageFile
  }

  /**
   * Get type from image file
   * @returns String
   */
  async getTypeFile () {
    try {
      const buffer = await this.toBuffer()
      const type = await fileType.fromBuffer(buffer)
      return type
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * Get image file metadata
   * @return Object
   */
  async metadata () {
    const metadata = await super.metadata()
    if (!metadata.size) {
      const buffer = await this.toBuffer()
      metadata.size = Buffer.byteLength(buffer)
    }

    return {
      ...metadata,
      _size: fileSize(metadata.size)
    }
  }

  static async isImage (resource) {
    const sourceStat = fs.lstatSync(resource)
    if (sourceStat.isDirectory()) return false

    const type = await fileType.fromFile(resource)

    if (!type) return false

    if (type.mime.indexOf('image') > -1) return true

    return false
  }
}

module.exports = Image
